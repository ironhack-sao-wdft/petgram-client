import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import Checkbox from "../../components/Checkbox";

const speciesOptions = [
  { value: "default", text: "Select a species" },
  { value: "dog", text: "Dog" },
  { value: "cat", text: "Cat" },
  { value: "hamster", text: "Hamster" },
  { value: "bird", text: "Bird" },
  { value: "fish", text: "Fish" },
];

function PetForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="Name"
        type="text"
        id="petFormName"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
      />

      <SelectInput
        label="Species"
        id="petFormSpecies"
        name="species"
        value={props.state.species}
        onChange={props.onChange}
        options={speciesOptions}
      />

      <TextInput
        label="Age"
        type="number"
        id="petFormAge"
        name="age"
        value={props.state.age}
        onChange={props.onChange}
      />

      <TextInput
        label="Color"
        type="text"
        id="petFormColor"
        name="color"
        value={props.state.color}
        onChange={props.onChange}
      />

      <TextInput
        label="Breed"
        type="text"
        id="petFormBreed"
        name="breed"
        value={props.state.breed}
        onChange={props.onChange}
      />

      <TextInput
        label="Likes"
        type="text"
        id="petFormLikes"
        name="likes"
        value={props.state.likes}
        onChange={props.onChange}
        hint="Please fill a comma separated list"
      />

      <TextInput
        label="Dislikes"
        type="text"
        id="petFormDislikes"
        name="dislikes"
        value={props.state.dislikes}
        onChange={props.onChange}
        hint="Please fill a comma separated list"
      />

      <TextInput
        label="Profile Picture"
        type="text"
        id="petFormPicture"
        name="picture"
        value={props.state.picture}
        onChange={props.onChange}
      />

      <Checkbox
        label="Available for adoption?"
        id="petFormAdopted"
        name="adopted"
        checked={props.state.adopted}
        onChange={props.onCheckboxChange}
      />

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default PetForm;
