import Card from "../../components/Card/Card";
import Site from "../../components/Site/Site";
import "./HomePage.css"

const HomePage = () => {

  return (
    <div className="HomePage">
      <section className="banner">
        <div className="section-bg"></div>
        <div className="text">
          <p>اكتشف اماكن مذهلة حول العالم</p>
        </div>
      </section>
      <section className="cards-container">
      <Card
          svg={<svg width="49" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" className="advantageBannerIcon__2LXU"><path d="M44.72 6.372c8.614 9.318 1.384 10.945-6.346 18.916-7.73 7.972-13.126 12.63-21.646 9.952-8.52-2.679-21.465-14.952-13.735-22.924 7.73-7.971 33.113-15.263 41.727-5.944z" fill="#DEECED"></path><path fillRule="evenodd" clipRule="evenodd" d="M26.625 18.7c5.176-1.054 9-4.773 9-9.2 0-5.247-5.373-9.5-12-9.5s-12 4.253-12 9.5c0 4.136 3.34 7.655 8 8.96V29h7V18.7z" fill="#fff"></path><path d="M20.685 31.154a2.274 2.274 0 01-2.271-2.272v-3.57h-.974a.974.974 0 010-1.947h1.502l-1.162-3.014c-4.354-1.785-7.155-5.548-7.155-9.642C10.625 4.804 16.303 0 23.281 0c6.979 0 12.657 4.804 12.657 10.71 0 4.093-2.8 7.856-7.156 9.641l-1.161 3.014h1.502a.974.974 0 010 1.948h-.974v3.57a2.274 2.274 0 01-2.272 2.27h-5.192zm-.324-2.272c0 .18.145.325.324.325h5.192c.18 0 .325-.146.325-.325v-3.57H20.36v3.57zm5.172-5.517l.88-2.282a14.691 14.691 0 01-3.132.335c-1.059 0-2.11-.111-3.132-.335l.88 2.282h4.504zM23.281 1.947c-2.639 0-4.867 4.012-4.867 8.762 0 4.75 2.228 8.762 4.867 8.762 2.64 0 4.868-4.012 4.868-8.762 0-4.75-2.229-8.762-4.868-8.762zm-4.603.857c-3.664 1.438-6.106 4.517-6.106 7.905s2.442 6.467 6.106 7.905c-1.389-2.005-2.212-4.877-2.212-7.905 0-3.028.823-5.9 2.212-7.905zm9.206 0c1.39 2.005 2.212 4.877 2.212 7.905 0 3.029-.823 5.9-2.212 7.905 3.665-1.438 6.106-4.517 6.106-7.905s-2.441-6.467-6.106-7.905z" fill="#2A2D32"></path></svg>}
          title="تجارب لا تنسى"
          desc="اكتشف فعاليات مدهشة جداً، لن تنساها"
        />
      <Card
          svg={<svg width="49" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" className="advantageBannerIcon__2LXU"><path d="M44.47 5.626c8.614 9.318 1.384 10.944-6.346 18.916-7.73 7.972-13.126 12.63-21.646 9.952C7.958 31.815-4.987 19.542 2.743 11.57c7.73-7.972 33.113-15.263 41.727-5.944z" fill="#FCDACF"></path><path d="M28.78 1.255L16.528 5.068a2 2 0 00-1.405 1.91V26.5a2 2 0 002 2h14.947a2 2 0 002-2V8.75c0-.964-.78-1.745-1.745-1.745h-.745a1 1 0 01-1-1V2.58a1.386 1.386 0 00-1.798-1.324z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.181 29.999a2.812 2.812 0 01-2.805-2.812V6.6a.243.243 0 000-.032 2.929 2.929 0 012.014-2.805L28.52.102c.244-.067.497-.102.75-.102.757.001 1.46.296 1.988.829.529.532.82 1.24.817 1.99v2.804h.935a2.81 2.81 0 012.804 2.811v18.754A2.81 2.81 0 0133.01 30H16.18v-.001zm-.935-2.812c0 .517.419.937.935.937H33.01c.516 0 .935-.42.935-.937V8.433a.936.936 0 00-.935-.937l-1.772.001a.886.886 0 01-.197 0l-15.795.006v19.684zm14.03-25.312a1 1 0 00-.257.033l-13.088 3.65a.967.967 0 00-.156.07l14.43-.005V2.817a.935.935 0 00-.929-.942zm-1.052 20.627c-.295 0-.585-.078-.838-.225l-2.79-1.575-2.802 1.579a1.641 1.641 0 01-.824.22c-.594 0-1.149-.32-1.447-.834a1.69 1.69 0 01-.097-1.482l1.098-2.53-1.976-1.952a1.669 1.669 0 01-.026-2.352 1.695 1.695 0 011.207-.502h2.074l1.296-2.555a1.69 1.69 0 011.499-.91 1.678 1.678 0 011.485.897l1.302 2.571h2.078c.913 0 1.658.733 1.675 1.633.01.458-.173.905-.5 1.226l-1.974 1.948 1.092 2.515a1.677 1.677 0 01-.894 2.201 1.65 1.65 0 01-.638.127zm-3.629-3.812c.16 0 .318.041.458.12l2.747 1.55-1.104-2.545a.944.944 0 01.202-1.042l2.074-2.046h-2.158a.931.931 0 01-.834-.512l-1.385-2.732-1.385 2.728a.93.93 0 01-.832.512H20.22l2.074 2.049c.273.27.354.688.202 1.04l-1.106 2.546 2.748-1.548a.934.934 0 01.457-.12zm-5.61 6.622c0 .518.42.938.936.938h9.349a.936.936 0 000-1.875h-9.35a.936.936 0 00-.934.937z" fill="#2A2D32"></path></svg>}
          title="Stay Up to Date"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, alias?"
        />
      <Card
          svg={<svg width="49" height="35" fill="none" xmlns="http://www.w3.org/2000/svg" className="advantageBannerIcon__2LXU"><path d="M44.22 4.626c8.614 9.318 1.384 10.944-6.346 18.916-7.73 7.972-13.126 12.63-21.646 9.952C7.708 30.815-5.237 18.542 2.493 10.57c7.73-7.972 33.113-15.263 41.727-5.944z" fill="#F5B8C3"></path><path fillRule="evenodd" clipRule="evenodd" d="M32.858 13.556V5.15H13.693v8.405h.132c.76 3.409 4.702 6.005 9.45 6.005 4.748 0 8.69-2.596 9.45-6.004h.133zm-9.583 13.651s2.396.6 5.99.6c0-2.652-2.682-4.803-5.99-4.803-3.308 0-5.989 2.15-5.989 4.803 3.593 0 5.99-.6 5.99-.6z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.763 28.787a.777.777 0 01-.73-1.035 7.72 7.72 0 014.72-4.732 7.753 7.753 0 011.806-.406v-1.619c-5.671-.402-10.06-5.092-10.06-10.836v-.625H8.576c-.193 1.502-.093 2.849.34 3.882.472 1.126 1.355 1.933 2.884 2.184a.779.779 0 01-.252 1.536c-2.064-.339-3.391-1.504-4.068-3.119-.655-1.563-.68-3.487-.338-5.398a.779.779 0 01.766-.641H12.5v-1.7a2.328 2.328 0 012.322-2.329h17.033a2.328 2.328 0 012.322 2.329v.899h4.466c.377 0 .7.27.766.641.341 1.911.317 3.835-.338 5.398-.677 1.616-2.004 2.78-4.068 3.12a.779.779 0 01-.252-1.537c1.529-.251 2.412-1.058 2.884-2.184.432-1.033.533-2.38.34-3.881h-3.797v1.425c0 5.75-4.394 10.439-10.07 10.836v1.617a7.694 7.694 0 012.564.723 7.701 7.701 0 013.963 4.418.777.777 0 01-.73 1.034H16.763zM14.821 5.5h17.033c.427 0 .774.348.774.777v3.88c0 5.137-4.167 9.315-9.29 9.315-5.124 0-9.29-4.178-9.29-9.314V6.278c0-.429.346-.777.773-.777zm13.88 21.734a6.106 6.106 0 00-2.698-2.5 6.122 6.122 0 00-2.608-.61l-.005.001a.584.584 0 01-.107 0 6.189 6.189 0 00-2.015.358 6.133 6.133 0 00-3.301 2.75H28.7z" fill="#2A2D32"></path></svg>}
          title="اختبر معلوماتك"
          desc="حاول اجراء الاختبار لنشاهد ما اذا كنت BUCKETLIST"
        />
      </section>
      <section className="top-sites">
        <h1>أفضل المواقع</h1>
        <div className="sites-container">
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/tongariro-national-park-new-zealand-shutterstock_393395857.jpg"
            site="mor"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/tongariro-national-park-new-zealand-shutterstock_393395857.jpg"
            site="mor"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/tongariro-national-park-new-zealand-shutterstock_393395857.jpg"
            site="mor"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/taj-mahal-india-shutterstock_180918317.jpg"
            site="India"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/taj-mahal-india-shutterstock_180918317.jpg"
            site="India"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/taj-mahal-india-shutterstock_180918317.jpg"
            site="India"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/tongariro-national-park-new-zealand-shutterstock_393395857.jpg"
            site="mor"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/tongariro-national-park-new-zealand-shutterstock_393395857.jpg"
            site="mor"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/taj-mahal-india-shutterstock_180918317.jpg"
            site="India"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/taj-mahal-india-shutterstock_180918317.jpg"
            site="India"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/taj-mahal-india-shutterstock_180918317.jpg"
            site="India"  
          />
          <Site
            imgSrc="https://www.roadaffair.com/wp-content/uploads/2017/12/tongariro-national-park-new-zealand-shutterstock_393395857.jpg"
            site="mor"  
          />

        </div>
      </section>
    </div>
  );
};

export default HomePage;
