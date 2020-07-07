export const validators = {
  sizeValidate: function(e, selectedUserForm, updateProperty) {
    let initialValue =
      selectedUserForm.innerWindowStyle.container[updateProperty];
    let length = e.target.value.length;
    if (updateProperty === "top" || updateProperty === "left") {
      if (parseInt(e.target.value) > -9830 && length <= 8) {
        selectedUserForm.innerWindowStyle.container[updateProperty] =
          e.target.value;
        return;
      } else {
        alert("Overflow");
        selectedUserForm.innerWindowStyle.container[updateProperty] = -9830;
        return;
      }
    }
    if (length <= 8 && parseInt(e.target.value) >= 0) {
      selectedUserForm.innerWindowStyle.container[
        updateProperty
      ] = e.target.value.toString().concat("px");
    } else {
      selectedUserForm.innerWindowStyle.container[updateProperty] = (
        parseInt(initialValue) + 1
      )
        .toString()
        .concat("px");
      selectedUserForm.innerWindowStyle.container[updateProperty] = (
        parseInt(selectedUserForm.innerWindowStyle.container.height) - 1
      )
        .toString()
        .concat("px");
      alert("Overflow");
    }
  },
};
