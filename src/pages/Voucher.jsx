import React from "react";
// import ReactDOM from "react-dom";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from "react-crud-table";

// Component's Base CSS
import "./Voucher.css";


let tasks = [
  {
    id: 1,
    name: "Create an example",
  },
  {
    id: 2,
    name: "Tata Steel",
  },
  {
    id: 3,
    name: "Ambuja Cement Steel",
  },
  {
    id: 4,
    name: "Bhargav Cement",
  },
  {
    id: 5,
    name: "Apple Cement",
  },
  {
    id: 6,
    name: "FB Steel",
  },
  {
    id: 7,
    name: "Mayur Ltd Company",
  },
  {
    id: 8,
    name: "Tata Steel",
  },
  {
    id: 9,
    name: "Steelig company",
  },
  {
    id: 10,
    name: "Tata Steel",
  },
];

let count = tasks.length;
const service = {
  fetchItems: (payload) => {
    let result = Array.from(tasks);
    return Promise.resolve(result);
  },
  create: (task) => {
    count += 1;
    tasks.push({
      ...task,
      id: count,
    });
    return Promise.resolve(task);
  },
  update: (data) => {
    const task = tasks.find((t) => t.id === data.id);
    task.name = data.name;
    return Promise.resolve(task);
  },
  delete: (data) => {
    const task = tasks.find((t) => t.id === data.id);
    tasks = tasks.filter((t) => t.id !== task.id);
    return Promise.resolve(task);
  },
};

const styles = {
  container: {margin: "100px auto" , width: "550px" }
};

const Voucher = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="Tasks"
      fetchItems={(payload) => service.fetchItems(payload)}
    >
      <Fields>
        <Field name="id" label="Id" />
        <Field name="name" label="Name" placeholder="Name" />
      </Fields>
      <CreateForm
        message="Create a new Voucher!"
        trigger="Create Voucher"
        onSubmit={(task) => service.create(task)}
        submitText="Create"
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.title = "Please, provide task's name";
          }
          return errors;
        }}
      />

      <UpdateForm
        title=" Voucher Update Process"
        trigger="Update"
        onSubmit={(task) => service.update(task)}
        submitText="Update"
        validate={(values) => {
          const errors = {};

          if (!values.id) {
            errors.id = "Please, provide id";
          }

          if (!values.name) {
            errors.name = "Please, provide task's name";
          }
          return errors;
        }}
      />

      <DeleteForm
        title="Voucher Delete Process"
        message="Are you sure you want to Voucher?"
        trigger="Delete"
        onSubmit={(task) => service.delete(task)}
        submitText="Delete"
        validate={(values) => {
          const errors = {};
          if (!values.id) {
            errors.id = "Please, provide id";
          }
          return errors;
        }}
      />
    </CRUDTable>
  </div>
);

Voucher.propTypes = {};

export default Voucher;

// ReactDOM.render(<Example />, document.getElementById("root"));
