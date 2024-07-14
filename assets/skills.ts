// assets/skills.js
import pythonImage from "@/assets/images/skills/python.png";
import javascriptImage from "@/assets/images/skills/javascript.png";
import cImage from "@/assets/images/skills/c.png";
import cppImage from "@/assets/images/skills/cpp.png";
import csharpImage from "@/assets/images/skills/csharp.png";
import sqlImage from "@/assets/images/skills/sql.png";

import reactImage from "@/assets/images/skills/react.png";
import nextjsImage from "@/assets/images/skills/nextjs.png";
import djangoImage from "@/assets/images/skills/django.png";
import flaskImage from "@/assets/images/skills/flask.png";
import rorImage from "@/assets/images/skills/ror.png";
import nodeImage from "@/assets/images/skills/node.png";

import gitImage from "@/assets/images/skills/git.png";
import dockerImage from "@/assets/images/skills/docker.png";
import awsImage from "@/assets/images/skills/aws.png";

import postgresqlImage from "@/assets/images/skills/postgresql.png";
import mongodbImage from "@/assets/images/skills/mongodb.png";
import mysqlImage from "@/assets/images/skills/mysql.png";

import tensorflowImage from "@/assets/images/skills/tensorflow.png";
import kerasImage from "@/assets/images/skills/keras.png";
import pandasImage from "@/assets/images/skills/pandas.png";
import numpyImage from "@/assets/images/skills/numpy.png";


// Add more images as needed

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", descriptionKey: "pythonDescription", image: pythonImage },
      { name: "JavaScript", descriptionKey: "javascriptDescription", image: javascriptImage },
      { name: "C", descriptionKey: "cDescription", image: cImage },
      { name: "C++", descriptionKey: "cppDescription", image: cppImage },
      { name: "C#", descriptionKey: "csharpDescription", image: csharpImage },
      { name: "SQL", descriptionKey: "sqlDescription", image: sqlImage }, // Add appropriate image
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", descriptionKey: "reactDescription", image: reactImage },
      { name: "Next.js", descriptionKey: "nextjsDescription", image: nextjsImage },
      { name: "Django", descriptionKey: "djangoDescription", image: djangoImage },
      { name: "Flask", descriptionKey: "flaskDescription", image: flaskImage },
      { name: "Ruby on Rails", descriptionKey: "rorDescription", image: rorImage },
      { name: "Node.js", descriptionKey: "nodeDescription", image: nodeImage },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", descriptionKey: "gitDescription", image: gitImage },
      { name: "Docker", descriptionKey: "dockerDescription", image: dockerImage },
      // { name: "Kubernetes", descriptionKey: "kubernetesDescription", image: kubernetesImage },
      { name: "AWS", descriptionKey: "awsDescription", image: awsImage },
      // { name: "Azure", descriptionKey: "azureDescription", image: azureImage },
      // { name: "GCP", descriptionKey: "gcpDescription", image: gcpImage },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", descriptionKey: "postgresqlDescription", image: postgresqlImage },
      { name: "MongoDB", descriptionKey: "mongodbDescription", image: mongodbImage },
      { name: "MySQL", descriptionKey: "mysqlDescription", image: mysqlImage },
      // { name: "Redis", descriptionKey: "redisDescription", image: redisImage },
    ],
  },
  {
    category: "ML",
    items: [
      { name: "TensorFlow", descriptionKey: "tensorflowDescription", image: tensorflowImage },
      // { name: "PyTorch", descriptionKey: "pytorchDescription", image: pytorchImage },
      // { name: "Scikit-Learn", descriptionKey: "sklearnDescription", image: sklearnImage },
      { name: "Keras", descriptionKey: "kerasDescription", image: kerasImage },
      { name: "Pandas", descriptionKey: "pandasDescription", image: pandasImage },
      { name: "NumPy", descriptionKey: "numpyDescription", image: numpyImage },
    ],
  },
];

export default skills;
