/**
	{
		"api":1,
		"name":"Generate UUIDv4",
		"description":"Generates a new UUIDv4 string.",
		"author":"ChrisDBrown",
		"icon":"identification",
		"tags":"uuid"
	}
**/

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function main(input) {
	input.text = uuidv4();
}