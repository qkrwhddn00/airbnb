// CORS Anywhere 프록시를 통해 실제 room.json 파일에 대한 URL을 호출합니다.
fetch('https://cors-anywhere.herokuapp.com/실제-room-json-파일-URL')
  .then(response => response.json())
  .then(data => {
    var rooms = data.rooms;

    rooms.forEach(function(room, index) {
      $('.room-info').append(`
        <div class="room_id" draggable="true" data-id="${room.id}">
          <img src="${room.image}" class="room_img">
          <p>${room.price}</p>
          <p>${room.name}</p>
          <p>${room.info}</p>
        </div>
      `);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
