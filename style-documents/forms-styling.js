import { StyleSheet } from "react-native";

const formsStyles = StyleSheet.create({
	editEventScreenScrollViewContainer: {
		backgroundColor: "#d8dee5",
	},
	editEventScreenMainViewContainer: {
		margin: 10,
	},
	addGigContainer: {
		backgroundColor: "#d8dee5",
		paddingTop: 18,
	},
	addUserScrollView: {
		backgroundColor: "#d8dee5",
	},
	addUserContainer: {
		backgroundColor: "#d8dee5",
		paddingTop: 18,
	},
	logInScreenContainer: {
		backgroundColor: "#d8dee5",
	},
	formItemContainer:{
		marginHorizontal: 10,
	},
  label: {
  },
  input: {
	},
	checkboxesContainer: {
		marginBottom: 15,
		borderRadius: 6,
	},
	checkboxOuterContainer: {
		marginHorizontal: 35,
		flexDirection: 'row',
	},
	checkboxLabel: {
		fontWeight: 'bold',
		padding: 8,
		// marginHorizontal: 6,
		// marginVertical: 2,
		backgroundColor: 'white',
		width: 150,
	},
	checkboxContainer: {
		backgroundColor: 'white',
		padding: 0,
	},
	artistFormContainer: {
		backgroundColor: '#cbdfd0',
		// borderColor: 'red',
		// borderRadius: 4,
		// borderWidth: 2,
		paddingTop: 14,
	},
	venueFormContainer: {
		backgroundColor: '#f5eede',
		paddingTop: 14,
	},
	dropdownsContainer: {
		paddingBottom: 18,
		// backgroundColor: 'blue',
	},
  dropdown: {
    // height: 40,
		margin: 10,
		borderColor: 'red',
		borderWidth: 2,
		borderStyle: 'solid',
		backgroundColor: 'white',
  },
  timeAndDateInputContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: 'space-around',
		// paddingVertical: 10,
		// marginVertical: 2,
		marginHorizontal: 8,
		// backgroundColor: "#bfc4ca",
		// backgroundColor: "white",
	},
	timeAndDateInputLabel: {
		flex: 1,
		// textAlign: 'center',
		marginLeft: 6,
		fontWeight: 'bold',
		// backgroundColor: 'white',
		borderRadius: 4,
	},
	timeAndDateButtonContainer: {
		flex: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: 'space-between',
		paddingVertical: 10,
		// marginVertical: 2,
		marginHorizontal: 6,
		// backgroundColor: "#bfc4ca",
		// backgroundColor: "white",
	},
  datePickerButtonAndroid: {
		flex: 2,
		alignItems: "center",
		justifyContent: "space-around",
		paddingVertical: 6,
		paddingHorizontal: 14,
		borderRadius: 4,
		margin: 2,
		elevation: 3,
		// backgroundColor: "black",
  },
  timePickerButtonAndroid: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
		paddingVertical: 6,
		paddingHorizontal: 10,
		borderRadius: 4,
		margin: 2,
		elevation: 3,
		// backgroundColor: "black",
  },
	timeOrDatePickerButtonTextAndroid: {
		fontSize: 13,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
	entryFeeContainer: {
		marginHorizontal: 10,
		marginTop: 15,
		marginBottom: 30,
	},
	entryFeeLabel: {
		fontWeight: 'bold',
		marginHorizontal: 4,
		marginVertical: 2,
	},
  entryFeeInput: {
		backgroundColor: 'white',
		borderRadius: 4,
		padding: 10,
		fontSize: 15,
  },
  submitButton: {
		alignItems: "center",
		justifyContent: "space-around",
		paddingVertical: 6,
		paddingHorizontal: 16,
		marginHorizontal: 10,
		marginTop: 12,
		marginBottom: 20,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#01232d",
  },
  submitButtonText:{
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
  },
	logInGuidance: {
		textAlign: 'center',
		margin: 10,
	},
	logInErrorMessage: {
		color: '#e60000',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
	},
	logInScreenSignUpContainer: {
		marginVertical: 30,
		marginHorizontal: 10,
	},
	logInScreenSignUpSuggestion: {
		textAlign: 'center',
		margin: 10,
		fontSize: 15,
		// fontWeight: 'bold',
	},
	logInScreenSignUpButtonAndroid: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
		padding: 14,
		borderRadius: 4,
		margin: 2,
		elevation: 3,
		// backgroundColor: "black",
  },
	logInScreenSignUpButtonTextAndroid: {
		fontSize: 15,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
	editEventScreenTextContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap',
		marginVertical: 10,
  },
  editEventScreenTextLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 4,
    marginLeft: 4,
  },
  editEventScreenText: {

    // backgroundColor: '#7cb48f',
    // borderColor: 'black',
    // borderWidth: 1,
    // margin: 5,
    // width: '100%'
    fontSize: 14,
    marginVertical: 4,
  },
	editEventScreenEventImage: {
		resizeMode: 'contain',
    // width: '100%',
    height: 200,
    margin: 15,
	},
	eventScreenInputlabel: {
		fontSize: 14,
  },
  eventScreenInput: {
		fontSize: 14,
	},
});

export default formsStyles;
