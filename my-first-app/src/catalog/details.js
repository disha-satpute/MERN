function Details(){
    //use react props
return <welcome name ="sanika"/>;
};

function welcome(props){
    return (
        //props syntax
       <h1> Hello,{props.name}!!</h1>
    );
}
export default Details;