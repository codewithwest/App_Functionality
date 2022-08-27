import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        
        paddingTop:10,
        alignItems: 'center',
        justifyContent:'center',
        
        
        
    },
    title: {

    },
    logo: {
        
        height: 68,
        width: 68,
        alignSelf: "center",
        paddingBottom:6
        
        
        
    },
    input:{
  borderBottomColor: 'black',
  borderStyle:'dotted',
  height:50,
  width: 250,
  margin:10,
  //borderWidth:1,
  borderBottomWidth:1,
  padding:10,
  overflow:'hidden'
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 10
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})