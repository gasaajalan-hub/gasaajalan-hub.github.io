import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  category?: string;
}

const ArticleCard = ({ title, description, image, link, category }: ArticleCardProps) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        {category && (
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground mb-3">
            {category}
          </span>
        )}
        <h3 className="mb-2 text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
