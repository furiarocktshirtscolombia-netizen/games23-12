import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Game } from '../types';

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/games.csv');
        if (!response.ok) {
          throw new Error('Failed to fetch games data');
        }
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedGames = results.data.map((row: any) => ({
              id: row.id,
              name: row.name,
              level: row.level,
              category: row.category,
              description: row.description,
              link: row.link,
              thumbnail: row.thumbnail,
              isNew: row.isNew === 'true',
              isFeatured: row.isFeatured === 'true',
            }));
            setGames(parsedGames);
            setLoading(false);
          },
          error: (error: any) => {
            setError(error.message);
            setLoading(false);
          }
        });
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, loading, error };
}
