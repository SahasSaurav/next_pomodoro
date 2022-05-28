import type { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="portals"></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
