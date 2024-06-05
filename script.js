function firstWord(s) {
  // your code here
	s=s.trim();
	s=s.split(" ");
	if(s.length<0)
		return "";
	return s[0];
}

