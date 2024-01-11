import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { useGetCryptosQuery } from "../services/cryptoApi";
const { Title } = Typography;

const Home = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    if (isFetching) return <Loader />;
    const globalData = data?.data?.stats;
    // console.log(globalData);
    return (
        <>
            <Title level={2} className="heading">
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic
                        title="Total Cryptocurrencies"
                        value={globalData.total}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Exchanges"
                        value={millify(globalData.totalExchanges)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Market Cap"
                        value={millify(globalData.totalMarketCap)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total 24th Volume"
                        value={millify(globalData.total24hVolume)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Markets"
                        value={millify(globalData.totalMarkets)}
                    />
                </Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Top 10 Cryptos In The World
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/cryptocurrencies">Show more</Link>
                </Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Latest Crypto News
                </Title>
                <Title level={3}>
                    <Link to="/news">Show more</Link>
                </Title>
            </div>
            <News simplified />
        </>
    );
};

export default Home;
