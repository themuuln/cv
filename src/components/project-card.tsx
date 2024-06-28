import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  status?: "In Progress" | "Finished" | "Paused";
}

export function ProjectCard({ title, description, tags, link, status }: Props) {
  const disabled = title === "Private Projects";
  return (
    <Card
      className={`flex flex-col overflow-hidden border border-muted p-3 ${disabled ? "cursor-not-allowed" : ""}`}
    >
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className={`text-base`}>
            {link ? (
              <a
                href={!disabled ? link : "#"}
                target="_blank"
                className={`inline-flex items-center gap-1 ${disabled ? "cursor-not-allowed" : "hover:underline"}`}
              >
                {title}{" "}
                <span
                  className={`h-1 w-1 ${status === "Finished" ? "bg-green-500" : status === "Paused" ? "bg-red-500" : "bg-orange-500"} rounded-full`}
                ></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
