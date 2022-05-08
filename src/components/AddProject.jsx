import React, { useState } from 'react';
import axios from 'axios';

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
          Project Name
          <input
            name="projectName"
            value={formValues.projectName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Project Description
          <input
            name="projectDescription"
            value={formValues.projectDescription}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Project Budget
          <input
            name="projectBudget"
            value={formValues.projectBudget}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
