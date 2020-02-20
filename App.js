import React from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';


const ListData = [
  {key:1, name: "Audrey", time:'9:03AM', message: "Hi, how are you doing?"},
  {key:2, name: "Kenneth", time:'8:06AM',  message: "You should call the driver, it's urgent"},
  {key:3, name: "Yaa", time:'8:00PM',  message: "See you in class tomorrow. Goodnight"},
  {key:4, name: "Lali", time:'7:03PM',  message: "Party at my place today, want to come?"}
]

const ProfileImage = require('./assets/avatar.jpg');

const ListItems = ({name, message, time}) => {
  return(
    <View style={{flexDirection:'row', paddingHorizontal:15, paddingVertical:10}}>
       <View style={{flex:1,  justifyContent:'center', alignItems:'center'}}>
          <Image source={ProfileImage} style={{width:50, height:50, borderRadius:25}} />
       </View>
       <View style={{flex:5,borderBottomWidth:0.3, borderBottomColor:'#e3e3e3' }}>
          <View>
             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold'}}>{ name } </Text>
                <Text style={{color:'blue'}}> { time }</Text>
              </View>
          <View style={{flexDirection:'row', marginTop:1, justifyContent:'space-between'}}>
             <Text> {message}</Text> 
               <View style={{width:15, height:15, backgroundColor:'blue', borderRadius:20, alignItems:'center'}}>
                  <Text style={{fontSize:10, color:'#fff', fontWeight:'400'}}>1</Text>
               </View>
          </View>
        </View>  
      </View>  
    </View>
  );
};
const App = () => {
  return(
    <ScrollView style={{ flex:1}}>
      <View style={{marginBottom:20, marginTop:40}}>
         <View style={{ paddingHorizontal:15, flexDirection:'row',justifyContent:'space-between'}}>
           <Text style={{color:'blue', fontWeight:'400'}}>Edit</Text>
             <Entypo style={{color:'blue'}} name="new-message" size={18}/>    
         </View>
         <View style={{marginTop:20, marginHorizontal:15}}>
           <Text style={{fontSize:28, fontWeight:'bold'}}>Chats</Text>
         </View>
         <View style={{height:35,flexDirection:'row', width:370, borderRadius:10,marginTop:10, backgroundColor:'#e3e3e3', marginHorizontal:15, alignItems:'center'}}>
             <Ionicons name='ios-search' style={{fontWeight:'100', paddingHorizontal:5}} size={16} />
             <Text style={{fontSize:14}}>Search</Text>
         </View>
         <View style={{paddingVertical:3, flexDirection:'row', marginTop:10, borderBottomWidth:0.3, borderBottomColor:'#e3e3e3'}}>
            <View style={{width:25,alignItems:'center', justifyContent:'center', height:25, backgroundColor:'#e3e3e3', borderRadius:15, marginLeft:30}}>
                <Ionicons style={{color:'blue'}} name="ios-archive" size={15} />
            </View>
            <View style={{marginLeft:8, marginTop:4, flexDirection:'row'}}>
               <Text style={{fontSize:13, color:'blue'}}>Archived Chats</Text>
               <View style={{marginLeft:200}}>
                 <Text style={{color:'#e3e3e3', fontWeight:'bold'}}>0</Text>
               </View>
             </View>
         </View>
         <View style={{borderBottomWidth:0.3, borderBottomColor:'#e3e3e3',  paddingVertical:10}}>
           <View style={{paddingHorizontal:15,flexDirection:'row', justifyContent:'space-between' }}>
                <Text style={{color:'blue'}}>Broadcast Lists</Text>
                <Text style={{color:'blue'}}>New Group</Text>
           </View>
             </View>
      </View>
      <FlatList 
        data={ListData}
        renderItem={({item}) => <ListItems name={item.name} message={item.message} time={item.time} /> }
      />
    </ScrollView>
  );
};

export default App;