function Details(){
return <welcome name ="sanika"/>;
};

function welcome(props){
    return (
       <h1> Hello,{props.name}!!</h1>
    );
}
export default Details;