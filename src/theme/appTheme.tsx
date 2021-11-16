import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title:{
        fontSize:30,
        marginBottom: 10
    },
    container:
    {
        flex:1,
        backgroundColor:'#fff',
        allignItems:'center',
        justifyContent:'center',

    },
    input:
    {
        borderWidth:1,
        borderColor: '#777',
        padding: 8 ,
        margin:10,
        width:200,   
    },
    scrollView: {
        height: '20%',
        width: '80%',
        margin: 20,
        alignSelf: 'center',
        padding: 20,
        borderWidth: 5,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'lightblue'
       
      },
      contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        paddingBottom: 40
      },
      content: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 40
      },
      paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
     

});