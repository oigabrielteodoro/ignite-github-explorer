import { useEffect, useState } from "react";

import axios from 'axios';

import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: 'Form in React',
  link: 'https://github.com/unform/unform'
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/orgs/rocketseat/repos').then(response => {
      setRepositories(response.data);
    });
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem repository={repository} />
        ))}
      </ul>
    </section>
  )
}