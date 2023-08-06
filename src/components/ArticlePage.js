import { useParams } from "react-router-dom";
import { articles } from "../article-content";
import NotFound from "./NotFound";

export default function ArticlePage() {
	const { articleId } = useParams();
	const article = articles.find((article) => article.name === articleId);

	if (!article) {
		return <NotFound />;
	}

	return (
		<div>
			<h1>{article.title}</h1>
			{article.content.map((para) => (
				<p key={para}>{para}</p>
			))}
		</div>
	);
}
