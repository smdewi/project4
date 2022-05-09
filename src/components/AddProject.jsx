import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

export default function AddProject({ setProjects }) {
  const initialValues = {
    projectName: '',
    projectDescription: '',
    projectBudget: '',
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newProject = {
      name: formValues.projectName,
      description: formValues.projectDescription,
      budget: formValues.projectBudget,
    };
    axios.post('/projects', newProject).then((result) => {
      console.log(result);
      setProjects((projects) => [...projects, result.data.project]);
    });
  };

  return (
    <div className="col-sm">
      <div className="admin">
        <h2>Add Project</h2>
        <label>
          <input
            name="projectName"
            placeholder="Project Name"
            value={formValues.projectName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            name="projectDescription"
            placeholder="Project Description"
            value={formValues.projectDescription}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            name="projectBudget"
            placeholder="Budget"
            value={formValues.projectBudget}
            onChange={handleInputChange}
          />
        </label>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}
