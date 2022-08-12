import "materialize-css";
import {
  SideNav,
  Slider,
  Slide,
  SideNavItem,
  Button,
  Icon,
  Caption,
  Card,
  Row,
  Col,
  CardTitle,
  Pagination
} from "react-materialize";

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: "20px" }}>
        <style>
          {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
        </style>
        <SideNav
          id="SideNav-31"
          options={{
            draggable: true,
          }}
          trigger={
            <Button node="button" small style={{ padding: "0 30px 0 30px" }}>
              <Icon>list</Icon>
            </Button>
          }
        >
          <SideNavItem
            className="circle"
            user={{
              background:
                "https://www.greenscene.co.id/wp-content/uploads/2020/04/Saitama-1.jpg",
              email: "jefriwahyudi@gmail.com",
              image:
                "https://scontent.fcgk29-1.fna.fbcdn.net/v/t1.6435-9/31946587_1083732698445224_9104154963172392960_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF--oRg2gqEvwEfNoMWdtNnLUKe4D6g118tQp7gPqDXX4-md1pvm7gYXf3_JxD_lUxLgn6gZdYviRaYIokcVvai&_nc_ohc=AaN_3xvoGc0AX-PdW7e&tn=QFsPyYUXhpVFKcc6&_nc_ht=scontent.fcgk29-1.fna&oh=00_AT_Gtba9eNMSSDzNnUu5TF_5iqQTm1D3viaaroP24t2l1w&oe=62EE5432",
              name: "Jefri Wahyudi",
            }}
            userView
          />
          <SideNavItem href="#!icon" icon={<Icon>person_outline</Icon>}>
            Profil Saya
          </SideNavItem>
          <SideNavItem href="#!icon" icon={<Icon>help</Icon>}>
            Hubungi Kami
          </SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Product</SideNavItem>
          <SideNavItem>Kesehatan</SideNavItem>
          <SideNavItem>Komputer & Aksesoris</SideNavItem>
          <SideNavItem>Gaming</SideNavItem>
          <SideNavItem>Kamera</SideNavItem>
          <SideNavItem>Olahraga</SideNavItem>
          <SideNavItem>Fashion Pria</SideNavItem>
          <SideNavItem>Fashion Wanita</SideNavItem>
        </SideNav>
      </div>

      <div>
        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 300,
            indicators: true,
            interval: 6000,
          }}
        >
          <Slide
            image={
              <img
                alt="pantai"
                src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"
              />
            }
          >
            <Caption>
              <h3>Pantai</h3>
              <h5>
                Yuk Liburan Ke Pantai Gratis, Dengan Membeli Product Disini
              </h5>
            </Caption>
          </Slide>

          <Slide
            image={
              <img
                alt="hongkong"
                src="https://wallpaperaccess.com/full/1137389.jpg"
              />
            }
          >
            <Caption placement="left">
              <h3>Hongkong</h3>
              <h5>
                Dapatkan Kesempatan Jalan - Jalan Ke Hongkong Dengan Membeli
                Sebuah Product
              </h5>
            </Caption>
          </Slide>

          <Slide
            image={
              <img
                alt="paris"
                src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"
              />
            }
          >
            <Caption>
              <h3>Paris</h3>
              <h5>
                Kapan Lagi Bisa Liburan Ke Paris Tanpa Biaya? Dengan Membeli
                Product Disini, Kamu Bisa Liburan Ke Prancis Gratis
              </h5>
            </Caption>
          </Slide>
        </Slider>
        <br />

        <span>Hot List</span>
        <Row>
          <Col m={3}>
            <Card
              className="card small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg'>Audio</CardTitle>}
            >
              <p style={{fontSize: '13px'}}>Audio Technica - Mulai Dari <mark style={{backgroundColor: 'red', color:'black'}}>Rp 910 rb</mark></p>
            </Card>
          </Col>

          <Col m={3}>
            <Card
              className="card small"
              header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone</CardTitle>}
            >
              <p style={{fontSize: '13px'}}>Handphone Samsung - Mulai Dari <mark style={{backgroundColor:'red', color:'black'}}>Rp 200 rb</mark></p>
            </Card>
          </Col>

          <Col m={3}>
            <Card
              className='card small'
              header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">Sequishy</CardTitle>}
            >
              <p style={{fontSize: '13px'}}>Sequishy - Mulai Dari <mark style={{backgroundColor: 'red', color: 'black'}}>Rp 5,5 rb</mark></p>
            </Card>
          </Col>

          <Col m={3}>
            <Card
              className="card small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg'>Koleksi The Avenger</CardTitle>}
            >
              <p style={{fontSize:'13px'}}>Koleksi The Avenger - Mulai Dari <mark style={{backgroundColor: 'red', color:'black'}}>Rp 10 rb</mark></p>
            </Card>
          </Col>
        </Row>
        <Pagination 
          activePage={1}
          items={10}
          leftBtn={<Icon>chevron_left</Icon>}
          maxButtons={8}
          rightBtn={<Icon>chevron_right</Icon>}
        />
      </div>
    </div>
  );
}

export default App;
