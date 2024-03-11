import { useState, useEffect } from 'react';
import axios from 'axios'

const ProjectsAPI = () => {
  
  const [projects, setProjects] = useState([]);
  
  const fetchProjects = async () => {
    try {
          const response = await axios.get('https://api.github.com/users/ankit24rawat/repos');
          const data = response.data;
          setProjects(data);
          console.log(data);
      } catch (error) {
          console.log(error);
      }
  }
  
  // without useEffect , calling fetchProjects will cause endless api calls, 
  useEffect(() => {
    fetchProjects();
  }, []);
  
  const ProjectsData = projects.filter(function(project){
     return project.stargazers_count > 0;
  });

  return ProjectsData;            //returning api data, when exported function is called
}

export default ProjectsAPI;
