const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  const moduleObj = {
    id: "M101",
    name: "Introduction to NodeJS",
    description: "Learn basics of Node and Express",
    course: "CS5610",
  };
  
  export default function WorkingWithObjects(app) {
    const getAssignment = (req, res) => {
      res.json(assignment);
    };
  
    const getAssignmentTitle = (req, res) => {
      res.json(assignment.title);
    };
  
    const setAssignmentTitle = (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    };
  
    // update assignment score
    const setAssignmentScore = (req, res) => {
      const { newScore } = req.params;
      assignment.score = parseInt(newScore);
      res.json(assignment);
    };
  
    // update assignment completed
    const setAssignmentCompleted = (req, res) => {
      const { completed } = req.params;
      assignment.completed = completed === "true";
      res.json(assignment);
    };
  
    // get module
    const getModule = (req, res) => {
      res.json(moduleObj);
    };
  
    // get module name
    const getModuleName = (req, res) => {
      res.json(moduleObj.name);
    };
  
    // set module name
    const setModuleName = (req, res) => {
      const { newName } = req.params;
      moduleObj.name = newName;
      res.json(moduleObj);
    };
  
    // set module description
    const setModuleDescription = (req, res) => {
      const { newDescription } = req.params;
      moduleObj.description = newDescription;
      res.json(moduleObj);
    };
  
    
    app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
    app.get("/lab5/assignment/title", getAssignmentTitle);
    app.get("/lab5/assignment", getAssignment);
  
    // new routes for assignment updates
    app.get("/lab5/assignment/score/:newScore", setAssignmentScore);
    app.get("/lab5/assignment/completed/:completed", setAssignmentCompleted);
  
    // new routes for module
    app.get("/lab5/module", getModule);
    app.get("/lab5/module/name", getModuleName);
    app.get("/lab5/module/name/:newName", setModuleName);
    app.get("/lab5/module/description/:newDescription", setModuleDescription);
  }
  