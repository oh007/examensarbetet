import { StyleSheet, Dimensions} from 'react-native';
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Vit/beige bakgrundsfärg
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width:400,
        margin:15,
        height:500,
      
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
  
      },
      contentContainer: {
        
       
     
        
        borderRadius:25,
        backgroundColor:'#4442'
      },
      heading: {
        alignContent:'center',
        fontSize: 25,
        fontWeight:'800',
       textAlign:'center',
       padding:10,
      },
      paragraf:{
        fontSize: 15,
        marginBottom: 20,
       textAlign:'center',
       padding:15,
      },
      button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        width:'80%',
      },
      buttonText: {
        textAlign:'center',
        color: 'white',
        fontSize: 18,
      },
  });

  export default Styles;