import React, {useState} from "react";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import {INSERT_ONE_PRET} from "../../../../graphql/mutations/admin/circulation/Pret.mutation";
import {useMutation} from "@apollo/react-hooks";
import TextBox from "../../../ui/TextBox";
import Link from "next/link";
import AddReservationComponent from "./AddReservationComponent";
import AddReservations from "../../../../pages/admin/circulation/Circulation/pret_document/AddReservation";
// to use Class Componenet
/*class AddPretComponent extends React.Component {
    //let [pretExpress, {loading, error, data}] = useMutation(INSERT_ONE_PRET);
    // const [pretExpress, {loading,error,data}] =  useMutation();

    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }
    /!*componentDidMount  = async () => {
        const {client } =  this.props;
        const data = await client.query({
            query: useMutation(INSERT_ONE_PRET)
        })
    }*!/

    onHandlerAddPret = () =>{
        //console.log("user id: ",user)
        console.log("code : ",this.state.code)
        /!*e.preventDefault();
        pretExpress({
            variables: {
                copy_code:code,
                idBorrower: user,
            }
        });*!/
    }

    updateInputValue(evt) {
        this.setState({
            code: evt.target.value
        });
    }

    render() {
        return <React.Fragment>

            <Button className="btn waves-effect waves-light blue darken-2 center" rounded={5}
                onClick={this.onHandlerAddPret}
            >
                Ajouter un Pret
            </Button>
            <div className="col s12 m6 l3">
                <Input
                    type="text"
                    value={this.state.code}
                    onChange={evt => this.updateInputValue(evt)}

                />
            </div>

        </React.Fragment>
    }
}*/
// with Function Component
const AddPretComponent = ({refetch, user} ) => {
    const [AddPret, {loading, error, data}] = useMutation(INSERT_ONE_PRET,{
        onCompleted:()=> {refetch()}
    }) ;
console.log({refetch})
    const [code, setCode] = useState('');
    const [isExpress, setIsExpress] = useState(false);

    const onHandlerAddPret = (e) =>{
        console.log("code : ",code)
        console.log("user : ",user)
        AddPret({
            variables: {
                copy_code:code,
                idBorrower:user,
                isExpress:isExpress,
            }
        })
    }

    return <React.Fragment>

        <Button className="btn waves-effect waves-light blue darken-2 center" rounded={5}
                onClick={onHandlerAddPret}
        >
            Ajouter un Pret
        </Button>
        <Button className="btn waves-effect waves-light blue darken-2 center" rounded={5}

                onClick={onHandlerAddPret}
        >
            Ajouter un Pret Express
        </Button>
        <Link href="#">
            <Button className="btn waves-effect waves-light blue darken-2 center" rounded={5}>
                <i className="material-icons left">add</i>
                Ajouter un Reservation

            </Button>
        </Link>
        <div className="col s12 m6 l3">
            <TextBox
                type="text"
                label="Ajouter un pret"
                value={code}
                onChange={event => {
                    setCode(event.target.value)

                }}


            />
        </div>

    </React.Fragment>
}

export default AddPretComponent