import "../styles/globals.css";
import { AppProps } from "next/app";
import postReducer from "../features/post/postSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";

const store = configureStore({
	reducer: { posts: postReducer },
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />;
		</Provider>
	);
}

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default MyApp;
