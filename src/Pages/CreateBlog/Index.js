import { useState, React } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormText,
} from "reactstrap";

//Components
import NavBar from "../../Components/NavBar";

const CreateBlog = () => {
  const [entries, setEntries] = useState([
    {
      entryTitle: "Post 1",
      content: "Lorem ipsum",
      picture:
        "https://th.bing.com/th/id/R.39e42477364bd93386032ce9946b1f60?rik=XhDJ3iE%2buMo43w&pid=ImgRaw&r=0",
    },
    {
      entryTitle: "Post 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      picture:
        "https://th.bing.com/th/id/R.39e42477364bd93386032ce9946b1f60?rik=XhDJ3iE%2buMo43w&pid=ImgRaw&r=0",
    },
    {
      entryTitle: "Post 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      picture:
        "https://th.bing.com/th/id/R.39e42477364bd93386032ce9946b1f60?rik=XhDJ3iE%2buMo43w&pid=ImgRaw&r=0",
    },
  ]);
  const [entry, setEntry] = useState({});

  const changeHandler = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    setEntry({ ...entry, [property]: value });
  };

  const saveHandler = () => {
    setEntries([...entries, entry]);
    console.log(entries);
  };
  return (
    <div>
      <NavBar />

      <div className="form-wrapper">
        <Form>
          <FormGroup>
            <Label for="entryTitle">Titulo</Label>
            <Input
              id="entryTitle"
              name="entryTitle"
              type="textarea"
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="picture">Imagen</Label>
            <Input
              id="picture"
              name="picture"
              type="text"
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">Contenido</Label>
            <Input
              id="content"
              name="content"
              type="textarea"
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              Imagen
            </Label>
            <Col sm={10}>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Por favor carga una imagen</FormText>
            </Col>
          </FormGroup>
          <Button color="info" type="button" onClick={saveHandler}>
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateBlog;
