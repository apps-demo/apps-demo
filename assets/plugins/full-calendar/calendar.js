jQuery(document).ready(function(){
  jQuery('.datetimepicker').datepicker({
      timepicker: true,
      language: 'id',
      range: true,
      multipleDates: true,
		  multipleDatesSeparator: " - "
    });
  jQuery("#add-event").submit(function(){
      alert("Submitted");
      var values = {};
      $.each($('#add-event').serializeArray(), function(i, field) {
          values[field.name] = field.value;
      });
      console.log(
        values
      );
  });
});

(function () {    
    'use strict';
    // ------------------------------------------------------- //
    // Calendar
    // ------------------------------------------------------ //
	jQuery(function() {
		// page is ready
		jQuery('#calendar').fullCalendar({
			themeSystem: 'bootstrap4',
			// emphasizes business hours
			businessHours: false,
			defaultView: 'month',
			// event dragging & resizing
			editable: true,
			// header
			header: {
				left: 'title',
				center: 'month,agendaWeek,agendaDay',
				right: 'today prev,next'
			},
			events: [
				// {
				// 	title: 'Barber',
				// 	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				// 	start: '2020-05-05',
				// 	end: '2020-05-05',
				// 	className: 'fc-bg-default',
				// 	icon : "circle"
				// },
				{
					title: 'Denis Ressa Putra',
					umur: '32 Tahun',
					rm: '01505892',
					description: 'Post laparotomy reseksi colon descenden + colostomy ai peritonitis generalaisata ec perforasi colon descendens DPH 2',
					dpjp: 'AR',
					start: '2020-08-20T13:00:00',
					end: '2020-08-20T18:00:00',
					className: 'fc-bg-deepskyblue',
					icon : "user",
					allDay: false
				},
				{
					title: 'Sarmin',
					umur: '42 Tahun',
					rm: '015088711',
					description: 'Post laparotomy eksplorasi graham patch procedure ai peritonitis generalisata ec perforasi gaster DPH 4',
					dpjp: 'WS',
					start: '2020-08-20T17:00:00',
					end: '2020-08-20T21:00:00',
					className: 'fc-bg-deepskyblue',
					icon : "user",
					allDay: false
				},
				{
					title: 'Suparmi',
					umur: '37 Tahun',
					rm: '0150585503',
					description: 'Post laparotomy eksplorasi + Hemicolectomy + Anastomose illeotransvertomy end to side + PA DPH 7',
					dpjp: 'AR',
					start: '2020-08-21T09:00:00',
					end: '2020-08-21T14:00:00',
					className: 'fc-bg-deepskyblue',
					icon : "user",
					allDay: false
				},
				{
					title: 'Sumitro',
					umur: '48 Tahun',
					rm: '01505117',
					description: 'Adeno Ca recti metas paru  + Anemia',
					dpjp: 'AR',
					start: '2020-08-21T21:00:00',
					end: '2020-08-22T00:30:00',
					className: 'fc-bg-deepskyblue',
					icon : "user",
					allDay: false
				},
			],
			eventRender: function(event, element) {
				if(event.icon){
					element.find(".fc-title").prepend("<i class='fa fa-"+event.icon+"'></i>");
				}
			  },
			dayClick: function() {
				// jQuery('#modal-view-event-add').modal();
			},
			eventClick: function(event, jsEvent, view) {
			    jQuery('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
					jQuery('.event-title').html(event.title);
					jQuery('.event-umur').html(event.umur);
					jQuery('.event-dpjp').html(event.dpjp);
					jQuery('.event-rm-id').html("(" + event.rm + ")");
					jQuery('.event-body').html(event.description);
					jQuery('.event-waktu-start').html(moment(event.start).format('dddd, DD MMMM YYYY // HH.mm'));
					jQuery('.eventUrl').attr('href',event.url);
					jQuery('#modal-view-event').modal();
			},
		})
	});
  
})(jQuery);