import {
  InfoCircleOutlined,
  PlusCircleOutlined,
  SettingOutlined,
  TwitterOutlined,
  GithubOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Button, Col, Menu, Popover, Row, Select } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import styled from 'styled-components';
import { useWallet } from '../utils/wallet';
import { ENDPOINTS, useConnectionConfig } from '../utils/connection';
import Settings from './Settings';
import CustomClusterEndpointDialog from './CustomClusterEndpointDialog';
import { EndpointInfo } from '../utils/types';
import { notify } from '../utils/notifications';
import { Connection } from '@solana/web3.js';
import WalletConnect from './WalletConnect';
import AppSearch from './AppSearch';
import { getTradePageUrl } from '../utils/markets';

const Wrapper = styled.div`
  background-color: #0d1017;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 30px;
  flex-wrap: wrap;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #2abdd2;
  font-weight: bold;
  cursor: pointer;
  img {
    height: 30px;
    margin-right: 8px;
  }
`;

const EXTERNAL_LINKS = {
  '/learn': 'https://serum-academy.com/en/serum-dex/',
  '/add-market': 'https://serum-academy.com/en/add-market/',
  '/wallet-support': 'https://serum-academy.com/en/wallet-support',
  '/dex-list': 'https://serum-academy.com/en/dex-list/',
  '/developer-resources': 'https://serum-academy.com/en/developer-resources/',
  '/explorer': 'https://explorer.solana.com',
  '/srm-faq': 'https://projectserum.com/srm-faq',
  '/discord': 'https://discord.gg/mD38zFCdYH',
  '/telegram': 'https://t.me/samoyedlovers',
  '/github': 'https://github.com/codeislaw1993/serum-dex-ui',
  '/twitter': 'https://twitter.com/lover_samoyed',
};

export default function TopBar() {
  const { connected, wallet } = useWallet();
  const {
    endpoint,
    endpointInfo,
    setEndpoint,
    availableEndpoints,
    setCustomEndpoints,
  } = useConnectionConfig();
  const [addEndpointVisible, setAddEndpointVisible] = useState(false);
  const [testingConnection, setTestingConnection] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const [searchFocussed, setSearchFocussed] = useState(false);

  const handleClick = useCallback(
    (e) => {
      if (!(e.key in EXTERNAL_LINKS)) {
        history.push(e.key);
      }
    },
    [history],
  );

  const onAddCustomEndpoint = (info: EndpointInfo) => {
    const existingEndpoint = availableEndpoints.some(
      (e) => e.endpoint === info.endpoint,
    );
    if (existingEndpoint) {
      notify({
        message: `An endpoint with the given url already exists`,
        type: 'error',
      });
      return;
    }

    const handleError = (e) => {
      console.log(`Connection to ${info.endpoint} failed: ${e}`);
      notify({
        message: `Failed to connect to ${info.endpoint}`,
        type: 'error',
      });
    };

    try {
      const connection = new Connection(info.endpoint, 'recent');
      connection
        .getEpochInfo()
        .then((result) => {
          setTestingConnection(true);
          console.log(`testing connection to ${info.endpoint}`);
          const newCustomEndpoints = [
            ...availableEndpoints.filter((e) => e.custom),
            info,
          ];
          setEndpoint(info.endpoint);
          setCustomEndpoints(newCustomEndpoints);
        })
        .catch(handleError);
    } catch (e) {
      handleError(e);
    } finally {
      setTestingConnection(false);
    }
  };

  const endpointInfoCustom = endpointInfo && endpointInfo.custom;
  useEffect(() => {
    const handler = () => {
      if (endpointInfoCustom) {
        setEndpoint(ENDPOINTS[0].endpoint);
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [endpointInfoCustom, setEndpoint]);

  const tradePageUrl = location.pathname.startsWith('/market/')
    ? location.pathname
    : getTradePageUrl();

  return (
    <>
      <CustomClusterEndpointDialog
        visible={addEndpointVisible}
        testingConnection={testingConnection}
        onAddCustomEndpoint={onAddCustomEndpoint}
        onClose={() => setAddEndpointVisible(false)}
      />
      <Wrapper>
        <LogoWrapper onClick={() => history.push(tradePageUrl)}>
          <img src={logo} alt="" />
          {'Samoyed DEX'}
        </LogoWrapper>
        <Menu
          mode="horizontal"
          onClick={handleClick}
          selectedKeys={[location.pathname]}
          style={{
            borderBottom: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'flex-end',
            flex: 1,
          }}
        >
          <Menu.Item key={tradePageUrl} style={{ margin: '0 10px 0 20px' }}>
            Order book
          </Menu.Item>
          {(!searchFocussed || location.pathname === '/convert') && (
            <Menu.Item key="/convert" style={{ margin: '0 10px' }}>
              Swap
            </Menu.Item>
          )}
          {(!searchFocussed || location.pathname === '/list-new-market') && (
            <Menu.Item key="/list-new-market" style={{ margin: '0 10px' }}>
              Add Market
            </Menu.Item>
          )}
          {(!searchFocussed || location.pathname === '/twitter') && (
              <Menu.Item key="/twitter" style={{ margin: '0 10px' }}>
                <a
                    href={EXTERNAL_LINKS['/twitter']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <TwitterOutlined />
                </a>
              </Menu.Item>
          )}
          {(!searchFocussed || location.pathname === '/github') && (
              <Menu.Item key="/github" style={{ margin: '0 10px' }}>
                <a
                    href={EXTERNAL_LINKS['/github']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <GithubOutlined />
                </a>
              </Menu.Item>
          )}
          {(!searchFocussed || location.pathname === '/telegram') && (
              <Menu.Item key="/telegram" style={{ margin: '0 10px' }}>
                <a
                    href={EXTERNAL_LINKS['/telegram']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <SendOutlined />
                </a>
              </Menu.Item>
          )}
          {!searchFocussed && (
            <Menu.SubMenu
              title="Documentations"
              onTitleClick={() =>
                window.open(EXTERNAL_LINKS['/learn'], '_blank')
              }
              style={{ margin: '0 0px 0 10px' }}
            >
              <Menu.Item key="/add-market">
                <a
                  href={EXTERNAL_LINKS['/add-market']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adding a market
                </a>
              </Menu.Item>
              <Menu.Item key="/wallet-support">
                <a
                  href={EXTERNAL_LINKS['/wallet-support']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supported wallets
                </a>
              </Menu.Item>
              <Menu.Item key="/dex-list">
                <a
                  href={EXTERNAL_LINKS['/dex-list']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DEX list
                </a>
              </Menu.Item>
              <Menu.Item key="/developer-resources">
                <a
                  href={EXTERNAL_LINKS['/developer-resources']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developer resources
                </a>
              </Menu.Item>
              <Menu.Item key="/explorer">
                <a
                  href={EXTERNAL_LINKS['/explorer']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solana block explorer
                </a>
              </Menu.Item>
              <Menu.Item key="/srm-faq">
                <a
                  href={EXTERNAL_LINKS['/srm-faq']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SRM FAQ
                </a>
              </Menu.Item>
            </Menu.SubMenu>
          )}
        </Menu>
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            paddingRight: 5,
          }}
        >
          <AppSearch
            onFocus={() => setSearchFocussed(true)}
            onBlur={() => setSearchFocussed(false)}
            focussed={searchFocussed}
            width={searchFocussed ? '350px' : '35px'}
          />
        </div>
        <div style={{display: 'none'}}>
          <Row
            align="middle"
            style={{ paddingLeft: 5, paddingRight: 5 }}
            gutter={16}
          >
            <Col>
              <PlusCircleOutlined
                style={{ color: '#2abdd2' }}
                onClick={() => setAddEndpointVisible(true)}
              />
            </Col>
            <Col>
              <Popover
                content={endpoint}
                placement="bottomRight"
                title="URL"
                trigger="hover"
              >
                <InfoCircleOutlined style={{ color: '#2abdd2' }} />
              </Popover>
            </Col>
            <Col>
              <Select
                onSelect={setEndpoint}
                value={endpoint}
                style={{ marginRight: 8, width: '150px' }}
              >
                {availableEndpoints.map(({ name, endpoint }) => (
                  <Select.Option value={endpoint} key={endpoint}>
                    {name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
        </div>
        {connected && (
          <div>
            <Popover
              content={<Settings autoApprove={wallet?.autoApprove} />}
              placement="bottomRight"
              title="Settings"
              trigger="click"
            >
              <Button style={{ marginRight: 8 }}>
                <SettingOutlined />
                Settings
              </Button>
            </Popover>
          </div>
        )}
        <div>
          <WalletConnect />
        </div>
      </Wrapper>
    </>
  );
}
