import Navbar from './Navbar';
import ArticleCard from './ArticleCard';
import { useLocation } from 'react-router-dom';

const NewsDetail = () => {
    // Fetch current route's info
    const location = useLocation();
    const { article } = location.state || {};

    // Condition: No article
    if (!article) return <div>404 - Article not found.</div>;

    return (
        <div className="news-detail">
            <Navbar isDetailView={true}/>

            <ArticleCard
                headline={article.headline}
                date={article.datetime}
                imageSrc={article.image}
                url={article.url}
                article={article}
                details={true}
            />
        </div>
    );
}

export default NewsDetail;