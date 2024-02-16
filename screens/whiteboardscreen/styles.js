import { StyleSheet, Dimensions} from 'react-native';
var width = Dimensions.get('window').width; 
const Styling = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Vit/beige bakgrundsfärg
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        margin:15,
        width: '100%', // Täcker halva skärmen i längd
        aspectRatio: 1, // Behåll aspect ratio för bilden
            flex: 0.3,
      
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
  
      },
      contentContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
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

  export default Styling;