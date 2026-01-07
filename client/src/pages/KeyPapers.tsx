import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, ArrowUpDown, ExternalLink } from "lucide-react";
import papersData from "@/data/papers.json";

interface Paper {
  topic: string;
  title: string;
  authors: string;
  year: number;
  pmid: string;
  url: string;
}

export default function KeyPapers() {
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Paper; direction: "asc" | "desc" } | null>(null);

  const filteredAndSortedPapers = useMemo(() => {
    let result = [...(papersData as Paper[])];

    // Search filter
    if (search) {
      const lowerSearch = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(lowerSearch) ||
          p.authors.toLowerCase().includes(lowerSearch) ||
          p.topic.toLowerCase().includes(lowerSearch) ||
          p.pmid.toLowerCase().includes(lowerSearch)
      );
    }

    // Sort
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [search, sortConfig]);

  const toggleSort = (key: keyof Paper) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container-width py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-serif font-bold text-primary">Key Papers (TBI & Neurodegeneration)</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Filter by title, author, topic, or PMID..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => toggleSort("year")}>
              Sort by Year <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => toggleSort("topic")}>
              Sort by Topic <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[150px]">Topic</TableHead>
              <TableHead className="min-w-[300px]">Title</TableHead>
              <TableHead>Authors</TableHead>
              <TableHead className="w-[80px]">Year</TableHead>
              <TableHead className="w-[120px]">PMID</TableHead>
              <TableHead className="w-[80px]">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedPapers.map((paper, idx) => (
              <TableRow key={idx} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium text-xs md:text-sm">{paper.topic || "—"}</TableCell>
                <TableCell>
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline flex items-start gap-1"
                  >
                    {paper.title || "—"}
                    <ExternalLink className="h-3 w-3 mt-1 shrink-0" />
                  </a>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs md:text-sm">{paper.authors || "—"}</TableCell>
                <TableCell>{paper.year || "—"}</TableCell>
                <TableCell className="font-mono text-xs">{paper.pmid || "—"}</TableCell>
                <TableCell>
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80"
                  >
                    PubMed
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center text-xs text-muted-foreground pt-4 border-t">
        <p>Data source: PubMed</p>
        <p>Last updated: 2026-01-06</p>
      </div>
    </div>
  );
}
