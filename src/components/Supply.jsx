import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Supply = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
    const cryptos = cryptosList?.data?.coins;
    // const {data} = useGetCryptoSupplyQuery(cryptos.uuid);
    if (isFetching) return <Loader />;

    return (
        <>
            <Row style={{ marginBottom: "10px", fontWeight: 600 }}>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                {cryptos?.map((coin) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel
                                key={coin.uuid}
                                showArrow={false}
                                header={
                                    <Row key={coin.uuid}>
                                        <Col span={6}>
                                            <Text>
                                                <strong>{coin.rank}.</strong>
                                            </Text>
                                            <Avatar
                                                className="exchange-image"
                                                src={coin.iconUrl}
                                            />
                                            <Text>
                                                <strong>{coin.name}</strong>
                                            </Text>
                                        </Col>
                                        <Col span={6}>
                                            ${millify(coin.price)}
                                        </Col>
                                        <Col span={6}>
                                            {millify(coin.marketCap)}
                                        </Col>
                                        <Col span={6}>
                                            {millify(coin.change)}%
                                        </Col>
                                    </Row>
                                }
                            >
                                <Text>
                                    <strong>Name : </strong>
                                    {coin.name}
                                    <br />
                                    <strong>Symbol : </strong>
                                    {coin.symbol}
                                    <br />
                                    <strong>BTC Prce : </strong>
                                    {coin.btcPrice}
                                    <br />
                                    <strong>Listed At : </strong>
                                    {coin.listedAt}
                                </Text>
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Supply;
