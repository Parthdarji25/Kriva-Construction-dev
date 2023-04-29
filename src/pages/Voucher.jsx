import React, { useRef, useState } from "react";
// useref is used to control the elements on like if we write anything in input field then it should get empty on click

import './Voucher.css';

function Employees() {


    const list = [
        {
            id: "1",
            heading: "ID",
            headingname: "Name",
            price: "30",
            name: "Viren"
        }, {
            id: "2",
            heading: "ID",
            headingname: "Name",
            price: "32",
            name: "Manoj"
        },
    ]

    const [lists, setList] = useState(list);

    const [updateState, setUpdateState] = useState(-1)

    return (


        <div className="crud">

            <div>
                <AddList setList={setList} />
                <form onSubmit={handleSubmit}>
                    <table>
                        {
                            lists.map((current) => (
                                updateState === current.id ? <EditList current={current} lists={lists} setList={setList} /> :

                                    <tr>

                                        {/* <th>{current.heading}</th>
                                        <th>{current.headingname}</th> */}

                                        <td>{current.name}</td>
                                        <td>{current.price}</td>
                                        <td>
                                            <button className="edit" onClick={() => handleEdit(current.id)}>Edit</button>
                                            <button className="delete" type="button" onClick={() => handleDelete(current.id)}>Delete</button>
                                        </td>
                                    </tr>
                            ))
                        }
                    </table>
                </form>
            </div>
        </div>
    );

    function handleEdit(id) {
        setUpdateState(id);
    }

    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newlist = lists.map((li) => (
            li.id === updateState ? { ...li, name: name, price: price } : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({ current, lists, setList }) {

    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, name: value } : li
        ))

        setList(newlist)
    }

    function handInputprice(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, price: value } : li
        ))

        setList(newlist)
    }

    return (
        <tr>
            <td><input type="text" onChange={handInputname} name="name" value={current.name} /></td>
            <td><input type="text" onChange={handInputprice} name="price" value={current.price} /></td>
            <td><button type="submit">Update</button></td>
        </tr>
    );
}



function AddList({ setList }) {

    const nameRef = useRef();
    const priceRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newlist = {
            id: 3,
            name,
            price
        }


        setList((prevList) => {
            return prevList.concat(newlist)
        })

        nameRef.current.value = "";
        priceRef.current.value = "";

    }

    return (

        <>
        <form className="addform" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter ID" ref={nameRef} />
            <input type="text" name="price" placeholder="Enter Name" ref={priceRef} />
            <button type="submit">Create</button>
        </form>
        {/* <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </tbody>
        </table> */}
        </>
    );

}


export default Employees;