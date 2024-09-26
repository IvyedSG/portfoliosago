import dotenv from 'dotenv';
import fs from 'fs/promises';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  // Imprimir el directorio actual y la ruta completa del archivo .env
  console.log('Current working directory:', process.cwd());
  const envPath = path.resolve(process.cwd(), '.env');
  console.log('Full path to .env file:', envPath);

  // Verificar si el archivo .env existe
  try {
    await fs.access(envPath);
    console.log('.env file exists');
  } catch (error) {
    console.log('.env file does not exist');
  }

  // Cargar las variables de entorno
  dotenv.config({ path: envPath });

  console.log('Loaded environment variables:', process.env);

  const username: string = 'IvyedSG';
  const id: string = 'MDQ6VXNlcjgwNDY4NTI0';
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

  console.log('Token:', token);

  if (!token) {
    throw new Error('GitHub Personal Access Token is not defined in the environment variables.');
  }

  interface GitHubResponse {
    data: any; // Reemplaza 'any' con el tipo correcto de Data si lo tienes definido
  }

  async function init(): Promise<void> {
    const headers: HeadersInit = {
      Authorization: `bearer ${token}`,
    };

    const body = {
      query: `{
        user(login: "${username}") {
          name
          issues {
            totalCount
          }
          pullRequests {
            totalCount
          }
          url
          repositoriesContributedTo {
            totalCount
          }
          topRepositories(orderBy: { field: STARGAZERS, direction: DESC }, first: 100) {
            nodes {
              nameWithOwner
              description
              stargazerCount
              forkCount
              url
              owner {
                avatarUrl
              }
              homepageUrl
              primaryLanguage {
                name
                color
              }
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 1, author: { id: "${id}" }) {
                      edges {
                        node {
                          committedDate
                          message
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          contributionsCollection {
            contributionCalendar {
              colors
              totalContributions
              months {
                totalWeeks
                firstDay
              }
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }`,
    };

    try {
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers,
      });

      const data = (await response.json()) as GitHubResponse;
      await fs.writeFile(path.join(process.cwd(), 'data', 'github-data.json'), JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error fetching data from GitHub:', error);
    }
  }

  await init();
}

main().catch(console.error);

export default main;