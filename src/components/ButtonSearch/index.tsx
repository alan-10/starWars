import { useState, useEffect } from "react";
import { useUserContext } from "../../contextApi/userContext";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { api } from "../../appi/api";
import { styled } from "@mui/material/styles";

import { darken } from "polished";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#AD0707",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      color: "red",
    },
    "&:hover fieldset": {
      borderColor: darken(0.2, "#AD0707"),
    },
    "&.Mui-focused fieldset": {
      borderColor: darken(0.2, "#AD0707"),
    },
  },
});

interface UserSearch {
  name: String;
  height: String;
  mass: String;
}

export function ButtonSerch() {
  const [userToSearch, setUserToSearch] = useState<UserSearch[]>([]);
  const [valueInput, setValueInput] = useState("");

  const { includUer } = useUserContext();

  useEffect(() => {
    api.get(`/people/?search=${valueInput}`).then((result) => {
      if(result)result && setUserToSearch(result.data.results);
    });
  }, [valueInput,userToSearch]);

  async function findUserBySelect(data: String) {

    const result = await api.get(`/people/?search=${data}`);
    const results = [result.data.results];
    console.log("results", results[0]);
    includUer(results[0]);
  }
   async function closeSearch(){
    includUer(userToSearch)
   }

  return (
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onChange={async (event, newValue) => {
          console.log(newValue);

          await findUserBySelect(newValue);
        }}
        onClose={async (event, newValue) => {
          console.log('close',newValue);
          if(newValue === 'blur'){
            await closeSearch()
          }
          
        }}
        options={userToSearch.map((option) => option.name)}
        renderInput={(params) => (
          <CssTextField
            {...params}
            onChange={(e) => setValueInput(e.target.value)}
            label="Localizar Personagens"
            value={valueInput}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}

