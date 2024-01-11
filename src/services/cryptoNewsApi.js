import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsApiHeaders = {
//     "X-RapidAPI-Key": "c8e8e1f85cmsh2b0045b2dbfccd7p1ba572jsn407826e6dc24",
//     "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
// };

// const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com";

const cryptoNewsApiHeaders = {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

const baseUrl = process.env.REACT_APP_NEWS_API_URL;

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (batchSize) =>
                createRequest(`/v2/crypto?batchSize=${batchSize}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
