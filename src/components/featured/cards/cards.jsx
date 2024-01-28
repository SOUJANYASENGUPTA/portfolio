import "../fpane/fpane.scss";

const Cards=(props)=>{
   return(
    <div class="card">
      <img src={props.img}/>
      <div class="content">
        <h3>{props.name}</h3>
        <p> {props.desc}</p>
        <a href={props.links}><button>Know more...</button></a>
      </div>
      
    </div>
   );
}
export default Cards;