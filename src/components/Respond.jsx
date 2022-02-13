import React from "react";

const Respond = () => {
    const response = JSON.parse(window.localStorage.getItem('response'))
    return (
        <>
            <div class="container mt-5 mb-5">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-md-6">
                        <h2>{response.title}</h2>
                        <div class="card">
                            <div class="d-flex justify-content-between p-2 px-3">
                                <div class="d-flex flex-row align-items-center">
                                    <div class="d-flex flex-column ml-2"><span class="font-weight-bold"> Posté par :  {response.createdBy.lastname} {response.createdBy.firstname}</span> <small class="text-primary">{response.category.name}</small> </div>
                                </div>
                                <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-2">le :{response.createdAt}</small> <i class="fa fa-ellipsis-h"></i> </div>
                            </div>
                            <img src={response.imageLink} class="img-fluid" alt="img" />
                            <div class="p-2">
                                description :
                                <p class="text-justify"> {response.description}</p>
                                <hr />
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-row icons d-flex align-items-center"> <i class="fa fa-heart"></i> <i class="fa fa-smile-o ml-2"></i> </div>
                                    <div class="d-flex flex-row muted-color">
                                        {(response.available) && (<>
                                            <span>Available : Oui</span>
                                        </>)
                                        }
                                        <span class="ml-2"></span> </div>
                                </div>
                                <hr />
                                <div class="comments">
                                    votre réponse :
                                    <div class="d-flex flex-row mb-2">
                                        <div class="d-flex flex-column ml-2"> <small class="comment-text">{response.responds[0].message}</small>
                                            <div class="d-flex flex-row align-items-center status">
                                                {(response.responds[0].verified) && (<>
                                                    <small>Verifié : Oui</small>
                                                </>) || (<>
                                                    <small>Verifié : Non</small>
                                                </>)
                                                }


                                                <small></small> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Respond;