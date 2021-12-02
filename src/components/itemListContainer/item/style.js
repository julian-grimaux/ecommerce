import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(()=>({
    
     media: {
        height:0,
        paddingTop: '56.25%',
    },
    cardContent:{
        display:'flex',
        justifyContent: 'space-between',
    },
    countcontainer:{
        fontFamily:'Montserrat, sans-serif',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'2rem',
        color:'gray',
    },
    buttoncontainer:{
            display:'flex',
            gap:'1rem',
    },
    stock:{
        color:'green',
        fontWeight:700,
        marginLeft:'4px'
    }
}));