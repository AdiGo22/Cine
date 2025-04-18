import {Image,View, TextInput} from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons';

interface Props { 
  placeholder : string;
  return: void;
}
const SearchBar = ({ placeholder,onPress }: Props) => {
  return( 
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
        <Image source = {icons.search} 
        className = "size-5" 
        resizeMode='contain' 
        tintColor='#ab8bff' />
       <TextInput 
       onPress = {onPress }
       placeholder={placeholder}
       value = ""
        placeholderTextColor = "#a8b5db"
        className='flex-1 ml-2 text-white'
        />
    </View>
  )
}


export default SearchBar;

/*
API Key : a525b249e13f5b170ba27ac32e6dd5cb
API token : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTI1YjI0OWUxM2Y1YjE3MGJhMjdhYzMyZTZkZDVjYiIsIm5iZiI6MTc0NDkyNTE0Mi45Niwic3ViIjoiNjgwMTcxZDZmMzljNzMwMTI1ZDk3NDdmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5XH_1k6XkRF74Ql_i-5umuGNQFxmC90fdq4MOT3pRJc
*/