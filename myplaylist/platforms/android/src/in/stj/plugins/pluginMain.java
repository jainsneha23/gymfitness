package in.stj.plugins;

import android.app.Activity;
import android.content.Context;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.google.gson.*;

/**
 * Created by Sneha on 28-Dec-14.
 */
public class pluginMain extends CordovaPlugin{
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("getSongs")) {
            String message = args.getString(0);
            this.getList(message, callbackContext);
            return true;
        }
        return false;  // Returning false results in a "MethodNotFound" error.
    }

    private void getList(String message, CallbackContext callbackContext) {
        Mp3Manager manager = new Mp3Manager();
        Activity activity=this.cordova.getActivity();
        List<String> songsList = manager.getSongs(activity);
        if(songsList.size() > 0){
            String json = new Gson().toJson(songsList);
            callbackContext.success(json);
        } else {
            callbackContext.error("No songs found");
        }
    }
}
