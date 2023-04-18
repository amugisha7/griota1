import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Tester({page, nextPage, prevPage}) {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  const onSubmit = data => console.log(data);
  
 
  return (
    <View>
      <Text>The value of page is </Text>
      {page === 0 && <View>
        <Controller
          control={control}
          rules={{
           required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        <Text onPress={nextPage}>0 Next Page</Text>
        {errors.firstName && <Text>This is required.</Text>}
      </View> 
      }

      {page ===1 &&
      <View>
        <Controller
          control={control}
          rules={{
           maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />
        <Text onPress={nextPage}>0 Next Page</Text>
        <Text onPress={prevPage}>0 Previous Page</Text>
      </View>
      }

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
