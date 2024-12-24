import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-image-previewer";
import { SlideToolbar, CloseButton } from "react-image-previewer/ui";
//https://react-image-previewer-example.vercel.app/en-US

type PortfolioPic = {
  url: string;
  name: string;
};

function shuffle(array: PortfolioPic[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const PortfolioBlobs = () => {
  const [blobUrls, setBlobUrls] = useState<PortfolioPic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPortfolioPics = async () => {
      setIsLoading(true);
      await fetch("https://api.nathanal.com/api/nathanal", {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          shuffle(data);
          setBlobUrls(data);
          setIsLoading(false);
        });
    };
    getPortfolioPics();
  }, []);

  return (
    <>
      <div className="container-fluid p-3 mt-2">
        <div className="row row-cols-2 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 p-0">
          <PhotoProvider
            overlayRender={(props) => {
              return (
                <>
                  <SlideToolbar
                    {...props}
                    items={["arrowLeft", "arrowRight"]}
                  />
                  <CloseButton onClick={props.onClose} />
                </>
              );
            }}
            enableMouseZoom={false}
          >
            {isLoading && (
            <div>Loading...   
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>  
            </div>)}
            {blobUrls.map((pic) => (
              <div className="col p-2" key={pic.name}>
                <PhotoView src={pic.url} key={pic.name}>
                  <img
                    src={pic.url}
                    alt={pic.name}
                    className="img-fluid rounded"
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                  />
                </PhotoView>
              </div>
            ))}
          </PhotoProvider>
        </div>
      </div>
    </>
  );
};

export default PortfolioBlobs;
