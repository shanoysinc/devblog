import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,300&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/monokai-sublime.min.css"
					/>
				</Head>
				<body>
					<Main />

					<NextScript />
					<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/languages/javascript.min.js"></script>

					<script>
						hljs.initHighlightingOnLoad();
					</script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
