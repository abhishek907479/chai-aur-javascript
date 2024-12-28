const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  // keydown ---> when the button is pressed event occurs
  insert.innerHTML = `
<div class="color">
<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.KeyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
</div>
`;
});
