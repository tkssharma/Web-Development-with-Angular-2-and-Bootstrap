<script>
  // Create shadow DOM
  var shadow = document.querySelector('#hostElement').createShadowRoot();
  // Add some text to shadow DOM
  shadow.innerHTML = '<p>Here is some new text</p>';
  // Add some CSS to make the text red
  shadow.innerHTML += '<style>p { color: red; }</style>';
</script>