import React from "react";
import { Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

// import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
// const { Option } = Select;

const News = ({ simplified }) => {
    // const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
    // const { data } = useGetCryptosQuery(100);
    const count = simplified ? 6 : 15;
    const { data: cryptoNews } = useGetCryptoNewsQuery(count);

    if (!cryptoNews?.news) return <Loader />;
    console.log(cryptoNews?.news);

    return (
        <Row gutter={[24, 24]}>
            {/* {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) =>
                            option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value={newsCategory}>Cryptocurrency</Option>
                        {data?.data?.coins?.map((currency) => (
                            <Option value={currency.name}>
                                {currency.name}
                            </Option>
                        ))}
                    </Select>
                </Col>
            )} */}
            {cryptoNews?.news?.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.Url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>
                                    {news.Title}
                                </Title>
                                <img src={news?.Image || demoImage} alt="" />
                            </div>
                            <p>
                                {news?.Description.length > 100
                                    ? `${news.Description.substring(0, 100)}...`
                                    : news.Description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar
                                        src={news?.Image || demoImage}
                                        alt=""
                                    />
                                    <Text className="provider-name">
                                        {news.Source}
                                    </Text>
                                </div>
                                <Text>
                                    {moment(news.PublishedOn)
                                        .startOf("ss")
                                        .fromNow()}
                                </Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default News;
