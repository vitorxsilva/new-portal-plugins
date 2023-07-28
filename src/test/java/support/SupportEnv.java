package support;

public class SupportEnv {

    public static String getEnv(){
        String URL = "";

        String env = System.getProperty("env");

        if(env.equals("dev")){
            URL = "http://localhost:3000/tst3";
        }
        else if (env.equals("hml")){
            URL = "http://localhost:3000/tst3";
        }
        return URL;
    }

}
